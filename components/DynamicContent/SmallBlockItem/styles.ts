import styled from "@emotion/styled";
import Link from "next/link";

export const SmallItemS = styled(Link)(({theme}) => `
  min-height: 100px;
  background-color: #f6f4f2;
  padding: 30px 20px;
  padding-right: 0;
  width: 100%;
  display: flex;
  text-decoration: none;
  > div {
    background-size: 80% auto;
    background-repeat: no-repeat;
    background-position: top right;
  }
  h3{
    margin-bottom: 15px;
    color: #2a82a9;
    width: 80%;
  }
  p{
    font-size: 18px;
    width: 80%;
  }
  .image-wrap{
    position: relative;
    width: 50%;
    display: block;
    min-width: 50%;
    margin-left: 10px;
    img{
      height: auto!important;
    }
  }
`)