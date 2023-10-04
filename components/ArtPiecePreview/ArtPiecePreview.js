import Link from "next/link";
import styled from "styled-components";
import FavouriteButton from "../FavouriteButton/FavouriteButton";

const StyledArtPiece = styled.div`
  width: 60%;
  background-color: #f2f0f0;
  height: 450px;
  display: relative;
  margin: 20px;
  padding: 20px;
  border-radius: 20px;
`;

export default function ArtPiecePreview({
  slug,
  image,
  title,
  artist,
  isFavourite,
  onToggleFavourite,
}) {
  return (
    <>
      <StyledArtPiece>
        <Link href={`/art-pieces/${slug}`}>
          {title ? <h3>{title}</h3> : null}
          <img
            width={250}
            height={250}
            src={image}
            alt={`artpiece is called ${title}`}
          />
          <p>{artist}</p>
        </Link>
        <FavouriteButton
          className="favourite-button"
          slug={slug}
          isFavourite={isFavourite}
          onToggleFavourite={onToggleFavourite}
        />
      </StyledArtPiece>
    </>
  );
}
