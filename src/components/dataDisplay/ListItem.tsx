import styled from 'styled-components';

const StyledListItem = styled.header`
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid #0c0c0d14;
  margin-bottom: 20px;
`;

const StyledBox = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 20px;
`;

const StyledTitle = styled.h1`
  font-size: 16px;
  font-weight: 400;
  line-height: 24px;
`;

const StyledDescription = styled.h2`
  font-size: 12px;
  font-weight: 400;
  line-height: 16px;
  color: #0c0c0d7a;
`;

interface PageHeaderProps {
  title: string;
  description?: string;
  icon?: React.ReactNode;
}

export const ListItem: React.FC<PageHeaderProps> = ({
  title,
  description,
  icon,
}) => {
  return (
    <StyledListItem>
      <StyledBox>
        <StyledTitle>{title}</StyledTitle>
        <StyledDescription>{description}</StyledDescription>
      </StyledBox>
    </StyledListItem>
  );
};
