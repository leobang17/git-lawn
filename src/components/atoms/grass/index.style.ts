import styled from "styled-components";
import { GrassProps, GrassShape } from "../../../@types";

export const GrassDom = styled.div<
  Pick<GrassProps, "grassSpan" | "visibility"> & { grassShape: GrassShape }
>`
  position: relative;
  height: ${(props) => props.grassSpan * 0.8}px;
  width: ${(props) => props.grassSpan * 0.8}px;
  margin: ${(props) => props.grassSpan * 0.1}px;
  background-color: ${(props) => props.color};
  border-radius: ${(props) =>
    shapeResolver(props.grassShape, props.grassSpan)}px;
  visibility: ${(props) => (props.visibility ? "visible" : "hidden")};
`;

const shapeResolver = (shape: GrassShape, grassSpan: number) => {
  switch (shape) {
    case "Circle":
      return grassSpan * 999;
    case "Rectangle":
      return grassSpan * 0.15;
  }
};
