import React from "react";

import classNames from "classnames";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import InputAdornment from "@material-ui/core/InputAdornment";
import Icon from "@material-ui/core/Icon";
// @material-ui/icons
import Email from "@material-ui/icons/Email";
import People from "@material-ui/icons/People";
// core components
import Header from "/components/Header/Header.js";
import HeaderLinks from "/components/Header/HeaderLinks.js";
import Footer from "/components/Footer/Footer.js";
import GridContainer from "/components/Grid/GridContainer.js";
import GridItem from "/components/Grid/GridItem.js";
import Button from "/components/CustomButtons/Button.js";
import Card from "/components/Card/Card.js";
import CardBody from "/components/Card/CardBody.js";
import CardHeader from "/components/Card/CardHeader.js";
import CardFooter from "/components/Card/CardFooter.js";
import CustomInput from "/components/CustomInput/CustomInput.js";
import Parallax from "/components/Parallax/Parallax.js";

import styles from "/styles/jss/nextjs-material-kit/pages/quickMint.js";
import QuickMintForm from "../section/LandingPage-Sections/QuickMintForm.js";

const useStyles = makeStyles(styles);

export default function QuickMint(props) {
  const [cardAnimaton, setCardAnimation] = React.useState("cardHidden");
  setTimeout(function () {
    setCardAnimation("");
  }, 700);
  const classes = useStyles();
  const { ...rest } = props;
  return (
    <div>
      <Header
        color="transparent"
        brand="📦 MintBoxx"
        fixed
        changeColorOnScroll={{
          height: 400,
          color: "white",
        }}
        {...rest}
      />
      <Parallax
        filter
        responsive
        image="https://as2.ftcdn.net/v2/jpg/02/67/82/41/1000_F_267824136_o7c7xwQ1Ue2BINEPvJwyeFzok1Xq2h8h.jpg"
      >
        <div className={classes.container}>
          <GridContainer>
            <GridItem xs={12} sm={12} md={6}>
              <h1 className={classes.title}>Quick Mint</h1>
              <h4>
                MintBoxx empowers digital creators to unleash their creativity
                by providing the ability to create innovative NFT experiences
                for their audiences.
              </h4>
              <br />
            </GridItem>
          </GridContainer>
        </div>
      </Parallax>
      <div className={classNames(classes.main, classes.mainRaised)}>
        <div className={classes.container}>
          <GridContainer>
            <GridItem xs={12} sm={12} md={8}>
              <CardBody>
                <QuickMintForm />
              </CardBody>
            </GridItem>
            <GridItem xs={12} sm={12} md={4}>
              <CardBody style={{ marginTop: "25%" }}>
                <img
                  style={{ width: "100%" }}
                  src="https://hbobis.files.wordpress.com/2015/12/animation-rocket.gif"
                />
                <h1 className={classes.bottomTitle}>Quick Mint</h1>
              </CardBody>
            </GridItem>
          </GridContainer>
        </div>
      </div>
      <Footer />
    </div>
  );
}
