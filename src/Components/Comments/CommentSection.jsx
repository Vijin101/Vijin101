"use client";
import { useState } from "react";
import { Form, Button, Image, Pagination } from "react-bootstrap";
import {
  MdSend,
  MdEdit,
  MdDelete,
  MdReply,
  MdThumbUp,
  MdThumbUpOffAlt,
} from "react-icons/md";
import styles from "./CommentSection.module.css";

const CommentSection = ({ blogId }) => {
  const [comments, setComments] = useState([
    {
      id: 1,
      author: "John Doe",
      content: "This is such an inspiring message! Thank you for sharing.",
      date: "2024-03-15",
      avatar: "../assets/user.jpg",
      isAuthor: false,
      likes: 5,
      isLiked: false,
      replies: [
        {
          id: 101,
          author: "Author Name",
          content:
            "Thank you for your kind words! I'm glad it resonated with you.",
          date: "2024-03-15",
          avatar: "../assets/user.jpg",
          isAuthor: true,
          likes: 2,
          isLiked: false,
        },
      ],
    },
    {
      id: 2,
      author: "Current User",
      content: "I needed to read this today. God's timing is always perfect.",
      date: "2024-03-14",
      avatar: "../assets/user.jpg",
      isCurrentUser: true,
      likes: 3,
      isLiked: true,
      replies: [],
    },
    // Add more sample comments here
  ]);

  const [newComment, setNewComment] = useState("");
  const [editingComment, setEditingComment] = useState(null);
  const [replyingTo, setReplyingTo] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const commentsPerPage = 10;

  // Simulate if current user is the author
  const isAuthor = true; // This should come from your auth system

  const handleAddComment = (e) => {
    e.preventDefault();
    if (!newComment.trim()) return;

    const comment = {
      id: comments.length + 1,
      author: "Current User",
      content: newComment,
      date: new Date().toISOString().split("T")[0],
      avatar: "../assets/user.jpg",
      isCurrentUser: true,
      likes: 0,
      isLiked: false,
      replies: [],
    };

    setComments([...comments, comment]);
    setNewComment("");
  };

  const handleEditComment = (commentId, newContent) => {
    setComments(
      comments.map((comment) => {
        if (comment.id === commentId) {
          return { ...comment, content: newContent };
        }
        return comment;
      })
    );
    setEditingComment(null);
  };

  const handleDeleteComment = (commentId) => {
    if (window.confirm("Are you sure you want to delete this comment?")) {
      setComments(comments.filter((comment) => comment.id !== commentId));
    }
  };

  const handleReply = (commentId, replyContent) => {
    if (!replyContent.trim() || !isAuthor) return;

    const reply = {
      id: Date.now(),
      author: "Author Name",
      content: replyContent,
      date: new Date().toISOString().split("T")[0],
      avatar: "../assets/user.jpg",
      isAuthor: true,
      likes: 0,
      isLiked: false,
    };

    setComments(
      comments.map((comment) => {
        if (comment.id === commentId) {
          return { ...comment, replies: [...comment.replies, reply] };
        }
        return comment;
      })
    );
    setReplyingTo(null);
  };

  const handleLikeComment = (commentId, isReply = false, parentId = null) => {
    setComments(
      comments.map((comment) => {
        if (!isReply && comment.id === commentId) {
          return {
            ...comment,
            likes: comment.isLiked ? comment.likes - 1 : comment.likes + 1,
            isLiked: !comment.isLiked,
          };
        } else if (isReply && parentId === comment.id) {
          return {
            ...comment,
            replies: comment.replies.map((reply) =>
              reply.id === commentId
                ? {
                    ...reply,
                    likes: reply.isLiked ? reply.likes - 1 : reply.likes + 1,
                    isLiked: !reply.isLiked,
                  }
                : reply
            ),
          };
        }
        return comment;
      })
    );
  };

  // Pagination
  const indexOfLastComment = currentPage * commentsPerPage;
  const indexOfFirstComment = indexOfLastComment - commentsPerPage;
  const currentComments = comments.slice(
    indexOfFirstComment,
    indexOfLastComment
  );
  const totalPages = Math.ceil(comments.length / commentsPerPage);

  const CommentItem = ({ comment, isReply = false, parentId = null }) => (
    <div className={`${styles.commentItem} ${isReply ? styles.replyItem : ""}`}>
      <div className={styles.commentHeader}>
        <div className={styles.commentAuthor}>
          <Image
            src={comment.avatar}
            alt={comment.author}
            width={40}
            height={40}
            className={styles.commentAvatar}
          />
          <div>
            <h5>
              {comment.author}
              {comment.isAuthor && (
                <span className={styles.authorBadge}>Author</span>
              )}
            </h5>
            <small>{comment.date}</small>
          </div>
        </div>
        <div className={styles.commentActions}>
          <Button
            variant="link"
            className={`${styles.actionButton} ${
              comment.isLiked ? styles.liked : ""
            }`}
            onClick={() => handleLikeComment(comment.id, isReply, parentId)}
          >
            {comment.isLiked ? <MdThumbUp /> : <MdThumbUpOffAlt />}
            <span className={styles.likeCount}>{comment.likes}</span>
          </Button>
          {comment.isCurrentUser && (
            <>
              <Button
                variant="link"
                className={styles.actionButton}
                onClick={() => setEditingComment(comment.id)}
              >
                <MdEdit />
              </Button>
              <Button
                variant="link"
                className={styles.actionButton}
                onClick={() => handleDeleteComment(comment.id)}
              >
                <MdDelete />
              </Button>
            </>
          )}
          {!isReply && isAuthor && (
            <Button
              variant="link"
              className={styles.actionButton}
              onClick={() => setReplyingTo(comment.id)}
            >
              <MdReply />
            </Button>
          )}
        </div>
      </div>

      {editingComment === comment.id ? (
        <Form
          onSubmit={(e) => {
            e.preventDefault();
            handleEditComment(comment.id, e.target.editContent.value);
          }}
        >
          <Form.Control
            as="textarea"
            name="editContent"
            defaultValue={comment.content}
            className={styles.commentInput}
          />
          <Button type="submit" className={styles.commentButton}>
            Save
          </Button>
        </Form>
      ) : (
        <p className={styles.commentContent}>{comment.content}</p>
      )}

      {replyingTo === comment.id && isAuthor && (
        <Form
          onSubmit={(e) => {
            e.preventDefault();
            handleReply(comment.id, e.target.replyContent.value);
          }}
          className={styles.replyForm}
        >
          <Form.Control
            as="textarea"
            name="replyContent"
            placeholder="Write a reply..."
            className={styles.commentInput}
          />
          <Button type="submit" className={styles.commentButton}>
            <MdSend /> Reply as Author
          </Button>
        </Form>
      )}

      {comment.replies && comment.replies.length > 0 && (
        <div className={styles.replies}>
          {comment.replies.map((reply) => (
            <CommentItem
              key={reply.id}
              comment={reply}
              isReply={true}
              parentId={comment.id}
            />
          ))}
        </div>
      )}
    </div>
  );

  return (
    <div className={styles.commentsSection}>
      <h3>Comments ({comments.length})</h3>

      <Form onSubmit={handleAddComment} className={styles.commentForm}>
        <Form.Group>
          <Form.Control
            as="textarea"
            rows={3}
            placeholder="Share your thoughts..."
            value={newComment}
            onChange={(e) => setNewComment(e.target.value)}
            className={styles.commentInput}
          />
        </Form.Group>
        <Button type="submit" className={styles.commentButton}>
          <MdSend /> Post Comment
        </Button>
      </Form>

      <div className={styles.commentsList}>
        {currentComments.map((comment) => (
          <CommentItem key={comment.id} comment={comment} />
        ))}
      </div>

      {totalPages > 1 && (
        <div className={styles.pagination}>
          <Pagination>
            <Pagination.Prev
              onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
              disabled={currentPage === 1}
            />
            {[...Array(totalPages)].map((_, idx) => (
              <Pagination.Item
                key={idx + 1}
                active={currentPage === idx + 1}
                onClick={() => setCurrentPage(idx + 1)}
              >
                {idx + 1}
              </Pagination.Item>
            ))}
            <Pagination.Next
              onClick={() =>
                setCurrentPage((prev) => Math.min(prev + 1, totalPages))
              }
              disabled={currentPage === totalPages}
            />
          </Pagination>
        </div>
      )}
    </div>
  );
};

export default CommentSection;
