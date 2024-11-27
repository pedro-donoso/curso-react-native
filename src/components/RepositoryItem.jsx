import React from "react";
import { Image, View, StyleSheet } from "react-native";
import StyledText from "./StyledText";
import RepositoryStats from "./RepositoryStats";
import theme from "../theme";

const RepositoryItemHeader = ({ ownerAvatarUrl, fullName, description, language }) => (
 <View style={{ flexDirection: 'row', paddingBottom: 2 }}>
  <View style= {{ paddingRight: 10 }}>
    <Image style={styles.image} source={{ uri: ownerAvatarUrl }} />
  </View>
    <View style={{ flex: 1}}>
      <StyledText fontSize="subheading" fontWeight="bold">{fullName}</StyledText>
    <StyledText>{description}</StyledText>
    <StyledText style={styles.language}>{language}</StyledText>
    </View>
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
