import React from "react";
import { Text } from "react-native";
import PropTypes from "prop-types";

const MoviePresenter = () => <Text>Movies</Text>;

MoviePresenter.propTypes = {
  loading: PropTypes.bool.isRequired
};

export default MoviePresenter;
