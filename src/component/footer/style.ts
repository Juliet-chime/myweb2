import styled from 'styled-components';
import HomeBanner from '../../component/img/bg vector.png';

export const FooterHolder = styled.section`
  display: flex;
  flex-direction: column;
  gap: 50px;
  background-color: #f5f5f5;
  padding: 50px 0px 0px 0px;

  .footerNewsWrap {
    display: flex;
    background: #ffffff;
    box-shadow: 0px 4px 50px rgb(86 204 242 / 10%);
    border-radius: 10px;
    padding: 30px;
    width: 76%;
    margin: auto;

    @media (max-width: 768px) {
      display: block;
    }

    .newText {
      flex: 2;
      h1 {
        max-width: 500px;
        font-style: normal;
        font-weight: bold;
        font-size: 30px;
        line-height: 44px;
        color: #333333;
      }
    }
    .inputWrap {
      flex: 1;
      display: flex;
      flex-direction: column;
      justify-content: flex-end;
      align-items: flex-end;
    }
  }

  .footerWrap {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    background-image: url(${HomeBanner});
    background-size: cover;
    -webkit-background-size: cover;
    -moz-background-size: cover;
    -o-background-size: cover;
    background-size: cover;
    background-repeat: no-repeat;
    background-position: 0px -25px;
    position: relative;

    .footerWrapText {
      display: flex;
      justify-content: space-between;
      padding: 50px 150px;
      @media (max-width: 1024px) {
        padding: 15px;
        flex-wrap: wrap;
        gap: 10px;
      }
    }
    .footerLineWrap {
      position: relative;
    }
  }
`;

export const FooterLogo = styled.div`
  @media (max-width: 1024px) {
    // flex:3;
    width: 100%;
  }
  .footerLogo {
    width: 45px;
    height: 45px;
    img {
      width: 100%;
      height: 100%;
    }
  }
`;

export const FooterItem = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  h2 {
    font-weight: bold;
    font-size: 16px;
  }
  a {
    text-decoration: none;
    color: black;
  }
`;
export const FooterSocialIcon = styled.div`
div{
   display: flex;
  gap:15px;
}
h2 {
    font-weight: bold;
    font-size: 16px;
  }
    a{
         text-decoration:none;
         color:black;      
          font-size:16px;
    }
`;

export const LineThrough = styled.div`
  border: 1px dashed #56ccf2;
  height: 0px;
  opacity: 0.6;
`;
export const FooterArrowUp = styled.div`
  width: 30px;
  height: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #fff;
  border-radius: 5px;
  position: absolute;
  right: 100px;
  bottom: 70px;
  @media (max-width: 1024px) {
    right: 50px;
    bottom: 60px;
  }
`;
export const FooterMobility = styled.h2`
  font-size: 14px;
  font-weight: 500;
  padding: 20px 150px;
  @media (max-width: 1024px) {
    padding: 15px;
  }
`;
