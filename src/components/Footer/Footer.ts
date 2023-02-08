import styled from 'styled-components';

export const FooterContainer = styled.footer`
  @media (min-width: 375px) {
    background-color: ${({ theme }) => theme.colors.neutral[600]};
    font-size: 23px;
    height: fit-content;
    margin: 0 auto;
    width: 100%; 
  }

  @media (min-width: 768px) {
    height: 270px;
  }
`;

export const Container = styled.div`
  @media (min-width: 375px) {
    display: flex;
    flex-direction: column;
    gap: 2rem;
    margin: 0 auto;
    padding: 3rem 0 3rem;
    width: 90%;
  }

  @media (min-width: 768px) {
    flex-direction: row;
    justify-content: space-around; 
    max-width: 1200px;
    width: 80%;
  }
`;

export const GroupLink = styled.div`
`;

export const Title = styled.h3`
  @media (min-width: 375px) {
    color: ${({ theme }) => theme.colors.primary[100]};
    font-size: 1.325rem;
    padding-bottom: .5rem; 
  }

  @media (min-width: 768px) {
    padding-bottom: 1.8rem; 
  }
`;

export const ListItems = styled.ul`
`;

export const ListItem = styled.li`
  > a {
    color: ${({ theme }) => theme.colors.neutral[100]};
    font-size: 1rem;
    transition: color .3s ease-in;
    text-decoration: none;
    
    &:hover {  
      color: ${({ theme }) => theme.colors.primary[100]};
    }
  }
`;

export const SocialNetwork = styled.div`

  > a svg {
    fill: ${({ theme }) => theme.colors.neutral[100]};
    font-size: 40px;
    transition: all .5s ease-in;
    
    &:hover {
      fill: ${({ theme }) => theme.colors.primary[100]};
    }
  }
`;

export const Address = styled.address`
`;

export const AddressTitle = styled.p`
  color: ${({ theme }) => theme.colors.neutral[100]};
  font-size: 1rem;
  margin-top: 1rem;
  text-decoration: none;      
  transition: all .5s ease-in;

  &:hover {
    color: ${({ theme }) => theme.colors.primary[100]};
  }
`;