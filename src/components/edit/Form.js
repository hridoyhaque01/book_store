import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useEditBookMutation } from "../../features/api/apiSlice";
import Checkbox from "../ui/Checkbox";
import TextInput from "../ui/TextInput";

export default function Form({ book }) {
  const {
    id,
    name: initialName,
    author: initialAuthor,
    thumbnail: initialThumbnail,
    price: initialPrice,
    rating: initialRating,
    featured: initialFeatured,
  } = book;

  // local states
  const [name, setName] = useState(initialName);
  const [author, setAuthor] = useState(initialAuthor);
  const [thumbnail, setThumbnail] = useState(initialThumbnail);
  const [price, setPrice] = useState(initialPrice);
  const [rating, setRating] = useState(initialRating);
  const [featured, setFeatured] = useState(initialFeatured);

  const navigate = useNavigate();

  const [editBook, { isLoading, isError, isSuccess }] = useEditBookMutation();

  const handleEdit = (e) => {
    e.preventDefault();
    editBook({
      id,
      data: {
        name,
        author,
        thumbnail,
        price: Number(price),
        rating: Number(rating),
        featured,
      },
    });
  };

  useEffect(() => {
    if (isSuccess) {
      navigate("/");
    }
  });

  return (
    <form className="book-form" onSubmit={handleEdit}>
      <div className="space-y-2">
        <TextInput
          inputId="lws-bookName"
          title="Book Name"
          type="text"
          name="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </div>

      <div className="space-y-2">
        <TextInput
          inputId="lws-author"
          title="Author"
          type="text"
          name="author"
          value={author}
          onChange={(e) => setAuthor(e.target.value)}
        />
      </div>

      <div className="space-y-2">
        <TextInput
          inputId="lws-thumbnail"
          title="Image Url"
          type="text"
          name="thumbnail"
          value={thumbnail}
          onChange={(e) => setThumbnail(e.target.value)}
        />
      </div>

      <div className="grid grid-cols-2 gap-8 pb-4">
        <div className="space-y-2">
          <TextInput
            inputId="lws-price"
            title="Price"
            type="number"
            name="price"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
          />
        </div>

        <div className="space-y-2">
          <TextInput
            inputId="lws-rating"
            title="Rating"
            type="number"
            name="rating"
            min="1"
            max="5"
            value={rating}
            onChange={(e) => setRating(e.target.value)}
          />
        </div>
      </div>

      <div className="flex items-center">
        <Checkbox
          inputId="lws-featured"
          title="This is a featured book"
          type="checkbox"
          name="featured"
          checked={featured}
          onChange={(e) => setFeatured((prevState) => !prevState)}
        />
      </div>

      <button
        disabled={isLoading}
        type="submit"
        className="submit"
        id="lws-submit"
      >
        Update Book
      </button>

      {isSuccess && (
        <div className="success">Successfully edited a new Book</div>
      )}
      {isError && <div className="error">There was an error occurred!</div>}
    </form>
  );
}
