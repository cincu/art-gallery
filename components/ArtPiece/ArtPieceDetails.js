import React from "react";
import FavouriteButton from "../FavouriteButton/FavouriteButton";
import CommentForm from "../CommentForm/CommentForm";
import Comments from "../Comments/Comments";
import styled from "styled-components";
import Link from "next/link";
const StyledFormDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 3rem;
  padding-bottom: 10rem;
  gap: 1rem;
`;

export function ArtPieceDetails({
  isFavourite,
  onToggleFavourite,
  slug,
  image,
  name,
  artist,
  year,
  comments,
  onSubmitComment,
  genre,
}) {
  return (
    <StyledFormDiv>
      <img width={500} height={500} src={image} alt="artpiece" />
      <span>{`${name} by: ${artist}`}</span>
      <p>Year:{year}</p>
      <p>Genre: {genre}</p>
      <h3>Comments</h3>
      <Comments comments={comments} />
      <CommentForm slug={slug} onSubmitComment={onSubmitComment} />
      <FavouriteButton
        slug={slug}
        isFavourite={isFavourite}
        onToggleFavourite={onToggleFavourite}
      />
    </StyledFormDiv>
  );
}
3;
