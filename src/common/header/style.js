import styled from 'styled-components';
import logoPic from '../../statics/logo.png';

export const HeaderWrapper = styled.div`
  position: relative;
  height: 56px;
  border-bottom: 1px solid #f0f0f0;
`;

export const Logo = styled.a.attrs({
  href: '/'
})`
  position: absolute;
  top:0;
  left: 0;
  display: block;
  width: 100px;
  height: 56px;
  background: url(${logoPic});
  background-size:contain;
`;

export const Nav = styled.div`
  width: 960px;
  height: 100%;
  padding-right: 70px;
  box-sizing: border-box;
  margin: 0 auto;
`;

export const NavItem = styled.div`
  line-height: 56px;
  padding: 0 15px;
  font-size: 17px;
  color: #333;
  &.left {
    float: left;
  }
  &.right {
    float: right;
    color: #969696;
  }
  &.active {
    color: #ea6f5a;
  }
`;

export const SearchWrapper = styled.div`
  position: relative
  float: left;
  .zoom {
    position: absolute;
    right: 5px;
    bottom: 5px;
    width: 30px;
    height: 30px;
    line-height: 30px;
    text-align: center;
    border-radius: 15px;
    &.focused {
      background: #999;
      color: #fff;
    }
  }
`;

export const NavSearch = styled.input.attrs({
  placeholder: '搜索'
})`
  width: 240px;
  height: 38px;
  padding: 0 30px 0 20px;
  margin-top: 9px;
  margin-left: 20px;
  box-sizing: border-box;
  border: none;
  outline: none;
  border-radius: 19px;
  background: #eee;
  font-size: 14px;
  color: #666;
  &::placeholder {
    color: #999;
  }
  &.focused {
    width: 300px;
  }
  &.slide-enter {
    transition: all .4s ease-out
  }
  &.slide-enter-active {
    width: 300px;
  } 
  &.slide-exit {
    transition: all .4s ease-out
  }
  &.slide-exit-active{
    width: 240px;
  }
`;

export const SeacchInfo = styled.div`
  position: absolute;
  left: 20px;
  top: 56px;
  width: 240px;
  padding: 20px 20px 10px;
  background-color: #fff;
  box-shadow: 0 0 8px rgba(0,0,0,.2);
  &:before {
    content: "";
    left: 27px;
    width: 10px;
    height: 10px;
    transform: rotate(45deg);
    -ms-transform: rotate(45deg);
    -webkit-transform: rotate(45deg);
    top: -5px;
    z-index: -1;
  }
  &:after {
    content: "";
    position: absolute;
    width: 0;
    height: 0;
    border: 12px solid transparent;
    border-bottom-color: #fff;
    left: 20px;
    bottom: 99%;
  }
`;

export const SeacchInfoTitle = styled.div`
  height: 20px;
  margin-bottom: 10px;
  font-size: 14px;
  color: #969696;
`;

export const SearchInfoSwicth = styled.span`
  float: right;
  cursor: pointer;
  font-size: 13px;
  transition: all .2s ease-in;
  &:hover {
    color: #666;
  }
  .spin {
    display: block;
    float: left;
    margin-right: 2px;
    margin-top: 2px;
    font-size: 12px;
    transition: all .2s ease-in;
    transform-origin: center, center;
  }
`;

export const SearchInfoList = styled.div``;

export const SearchInfoItem = styled.a`
  margin-right: 10px;
  margin-bottom: 10px;
  display: inline-block;
  font-size: 12px;
  padding: 3px 6px;
  color: #787878;
  border: 1px solid #ddd;
  border-radius: 3px;
  cursor: pointer;
`;

export const Addition = styled.div`
  position: absolute;
  top:0;
  right: 0;
  height: 56px;
`;

export const Button = styled.div`
  float: right;
  margin-top: 9px;
  margin-right: 20px;
  padding: 0 20px;
  line-height: 38px;
  border-radius: 19px;
  border: 1px solid rgba(236,97,73,.7);
  font-size: 14px;
  &.reg {
    color: rgba(236,97,73,.7);
  }
  &.writing {
    background: rgba(236,97,73,1);
    color: #fff;
    .iconfont {
      margin-right: 3px;
    }
  }
`;
