import React from "react";
import styled from "styled-components";
import FlagList from "../../FlagList/FlagList";

const StyledWrapper = styled.main``;

const DisplaySection = ({ nations }) => {
  return (
    <StyledWrapper>
      <FlagList nations={nations} />
    </StyledWrapper>
  );
};

export default DisplaySection;
