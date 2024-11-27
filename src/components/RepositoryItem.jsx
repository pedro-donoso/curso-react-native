import React from "react";
import { Image, View, StyleSheet } from "react-native";
import StyledText from "./StyledText";
import RepositoryStats from "./RepositoryStats";
import theme from "../theme";

const RepositoryItemHeader = (props) => (
 <View>
  <Image style={styles.image} source={{ uri: props.ownerAvatarUrl }} />
  <StyledText fontSize="subheading" fontWeight="bold">
   {props.fullName}
  </StyledText>
  <StyledText>{props.description}</StyledText>
  <StyledText style={styles.language}>{props.language}</StyledText>
 </View>
);

const RepositoryItem = (props) => (
 <View key={props.id} style={styles.container}>
  <RepositoryItemHeader {...props} />
  <RepositoryStats {...props} />
 </View>
);

const styles = StyleSheet.create({
 container: {
  padding: 20,
  paddingBottom: 5,
  paddingTop: 5,
 },
 language: {
  padding: 4,
  color: theme.colors.white,
  backgroundColor: theme.colors.primary,
  alignSelf: "flex-start",
  borderRadius: 4,
  overflow: "hidden",
 },
 image: {
  width: 64,
  height: 64,
  borderRadius: 4,
 },
});

export default RepositoryItem;
