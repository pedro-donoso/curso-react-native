import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";
import repositories from "../data/repositories.js";

const RepositoryList = () => {
 return (
  <View>
   {repositories.map((repo) => (
    <View key={repo.id} style={styles.container}>
     <Image source={{ uri: repo.ownerAvatarUrl }} style={styles.avatar} />
     <View style={styles.infoContainer}>
      <Text style={styles.fullName}>{repo.fullName}</Text>
      <Text style={styles.description}>{repo.description}</Text>
      <Text style={styles.language}>{repo.language}</Text>
      <Text style={styles.forksCount}>Forks: {repo.forksCount}</Text>
      <Text style={styles.stargazersCount}>Stars: {repo.stargazersCount}</Text>
      <Text style={styles.ratingAverage}>Rating: {repo.ratingAverage}</Text>
      <Text style={styles.reviewCount}>Reviews: {repo.reviewCount}</Text>
     </View>
    </View>
   ))}
  </View>
 );
};

const styles = StyleSheet.create({
 container: {
  flexDirection: "row",
  padding: 10,
  borderBottomWidth: 1,
  borderBottomColor: "#ccc",
 },
 avatar: {
  width: 50,
  height: 50,
  borderRadius: 25,
  marginRight: 10,
 },
 infoContainer: {
  flex: 1,
 },
 fullName: {
  fontWeight: "bold",
 },
 description: {
  color: "#666",
 },
 language: {
  color: "#007bff",
 },
 forksCount: {
  color: "#333",
 },
 stargazersCount: {
  color: "#333",
 },
 ratingAverage: {
  color: "#333",
 },
 reviewCount: {
  color: "#333",
 },
});

export default RepositoryList;
