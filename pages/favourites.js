import ArtPiecePreview from "@/components/ArtPiecePreview/ArtPiecePreview";
import ArtPieces, { StyledLi } from "@/components/ArtPieces/ArtPieces";
export default function FavouritesPage({
  favouritedPieces,
  onToggleFavourite,
}) {
  return (
    <ul>
      <h3>{favouritedPieces.length} piece(s) are liked.</h3>
      <ArtPieces pieces={favouritedPieces} />
    </ul>
  );
}
