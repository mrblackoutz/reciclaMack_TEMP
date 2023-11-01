import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { styled } from "@mui/system";
import { Box } from "@mui/material";

const StyledButton = styled("button")({
  position: "absolute",
  zIndex: 2,
  top: "calc(50% - 15px)",
  width: "30px",
  height: "30px",
  cursor: "pointer",
  outline: "none",
  border: "none",
  background: "transparent",
  transition: "color 0.3s",
  "&:hover": {
    color: "white",
    backgroundColor: "rgba(0, 0, 0, 0.7)", // Opacidade de 70% (0.7)
    borderRadius: "50%", // Cantos arredondados
  },
});

export default function FeedbackCarousel({ children, arrowColor, ...props }) {
  return (
    <Carousel
      {...props}
      style={{ overflowY: "visible" }}
      showThumbs={false}
      showStatus={false}
      showArrows={true}
      renderIndicator={(onClickHandler, isSelected, index, label) => {
        const defStyle = {
          marginLeft: 20,
          color: "white",
          cursor: "pointer",
          display: "inline-block",
          bottom: "-16px",
          position: "relative",
        };
        const style = isSelected
          ? { ...defStyle, backgroundColor: "white", border: "2px solid black" }
          : { ...defStyle, backgroundColor: "black", opacity: 0.4 };
        return (
          <Box
            style={style}
            onClick={onClickHandler}
            onKeyDown={onClickHandler}
            value={index}
            key={index}
            role="button"
            tabIndex={0}
            aria-label={`${label} ${index + 1}`}
            height={"10px"}
            width={"10px"}
            borderRadius={"50%"}
          />
        );
      }}
      renderArrowPrev={(onClickHandler, hasPrev, label) =>
        hasPrev && (
          <StyledButton
            type="button"
            onClick={onClickHandler}
            title={label}
            sx={{
              left: 0,
              color: arrowColor,
            }}
          >
            &#9664; {/* Setas esquerda */}
          </StyledButton>
        )
      }
      renderArrowNext={(onClickHandler, hasNext, label) =>
        hasNext && (
          <StyledButton
            type="button"
            onClick={onClickHandler}
            title={label}
            sx={{
              right: 0,
              color: arrowColor,
            }}
          >
            &#9654; {/* Setas direita */}
          </StyledButton>
        )
      }
    >
      {children.map((child, index) => (
        <div key={index} style={{ display: "flex", justifyContent: "center" }}>
          {child}
        </div>
      ))}
    </Carousel>
  );
}
