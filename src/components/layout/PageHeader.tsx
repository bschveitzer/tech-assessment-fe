import styled from 'styled-components';

const StyledPageHeader = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 10% 0;
`;

const StyledTitle = styled.h1`
  font-size: 32px;
  font-weight: 400;
  line-height: 40px;
`;

interface PageHeaderProps {
  title: string;
  action?: React.ReactNode;
}

export const PageHeader: React.FC<PageHeaderProps> = ({ title, action }) => {
  return (
    <StyledPageHeader>
      <StyledTitle>{title}</StyledTitle>
      {action}
    </StyledPageHeader>
  );
};
