import { sizes } from "../../../../style/sizes";
import styled from "styled-components/macro";

export const FeeContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  height: 100%;
  padding-bottom: ${sizes.tradeContainerPadding};
`;
