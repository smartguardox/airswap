import { DefaultTheme } from "styled-components/macro";
import styled from "styled-components/macro";
import Modal from "styled-react-modal";

import IconButton from "../../components/IconButton/IconButton";
import { InfoSubHeading, Title } from "../../components/Typography/Typography";

export const StyledModal = Modal.styled`
  position: relative;
  border: 1px solid ${(props: { theme: DefaultTheme }) =>
    props.theme.colors.borderGrey};
  border-radius: 0.1875rem;
  width: 37.5rem;
  padding: 2.5rem 2.125rem;
  background: ${(props: { theme: DefaultTheme }) =>
    props.theme.colors.darkGrey};
`;

export const ModalCloseButton = styled(IconButton)`
  position: absolute;
  top: 1.5rem;
  right: 1.5rem;
  padding: 0.25rem;
`;

export const ModalTitle = styled(Title)`
  margin-bottom: 1.5rem;
`;

export const ModalParagraph = styled(InfoSubHeading)`
  color: ${(props: { theme: DefaultTheme }) => props.theme.colors.darkSubText};

  & + & {
    margin-top: 1rem;
  }
`;

export const ModalSubTitle = styled(Title)`
  margin: 2.5rem 0 0.5rem;
  font-size: 1rem;
`;
