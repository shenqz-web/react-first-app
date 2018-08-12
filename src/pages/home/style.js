import styled from 'styled-components';

export const HomeWrapper = styled.div`
  overflow: hidden;
  position: relative;
  width: 960px;
  margin: 0 auto;
`;

export const HomeLeft = styled.div`
  float: left;
  width: 655px;
  margin-left: 15px;
  padding-top: 20px;
  .banner-img {
    width: 100%;
    height: 270px;
  }
`;

export const Homeright = styled.div`
  float: right;
  width: 260px;
  padding-top: 20px;
`;

export const TopicWrapper = styled.div`
  padding: 20px 0 10px 0;
  overflow: hidden;
`;

export const TopicItem = styled.div`
  display: inline-block;
  margin: 0 18px 18px 0;
  min-height: 32px;
  background-color: #f7f7f7;
  border: 1px solid #dcdcdc;
  border-radius: 4px;
  vertical-align: top;
  overflow: hidden;
  img {
    width: 32px;
    height: 32px;
    vertical-align: middle;
  }
  span {
    display: inline-block;
    padding: 0 11px 0 6px;
    font-size: 14px;
  }
`;

export const ListItem = styled.li`
  position: relative;
  width: 100%;
  min-height: 140px;
  margin: 0 0 15px;
  padding: 15px 2px 20px 0;
  border-bottom: 1px solid #f0f0f0;
  word-wrap: break-word;
  .wrap-img {
    position: absolute;
    top: 50%;
    margin-top: -60px;
    right: 0;
    width: 125px;
    height: 100px;
    border-radius: 4px;
    border: 1px solid #f0f0f0;
  }
`;

export const ListItemInfo = styled.div`
  padding-right: 140px;
  .title {
    margin: -7px 0 4px;
    display: inherit;
    font-size: 18px;
    font-weight: 700;
    line-height: 1.5;
  }
  .abstract {
    margin: 0 0 8px;
    font-size: 13px;
    line-height: 24px;
    color: #999;
  }
  .meta {
    padding-right: 0!important;
    font-size: 12px;
    font-weight: 400;
    line-height: 20px;
    .nickname {
      margin-right: 10px;
      color: #b4b4b4;
      cursor: pointer;
      &:hover {
        color: #666;
        transition: .1s ease-in;
        -webkit-transition: .1s ease-in;
        -moz-transition: .1s ease-in;
        -o-transition: .1s ease-in;
        -ms-transition: .1s ease-in;
      }
    }
    span {
      margin-right: 10px;
      color: #b4b4b4;
    }
  }
`;

export const RecommendWrapper = styled.div`
  margin-top: -4px;
  padding-bottom: 4px;
  min-height: 228px;
`;

export const RecommendItem = styled.a`
  display: block;
  cursor: pointer;
  img {
    width: 100%;
    min-height: 50px;
    margin-bottom: 4px;
    border-radius: 4px;
  }
`;