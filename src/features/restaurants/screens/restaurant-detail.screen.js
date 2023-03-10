import React, { useState } from "react";
import { ScrollView } from "react-native";
import { List } from "react-native-paper";

import { RestaurantInfoCard } from "../components/restaurant-info-card.component";

import { SafeArea } from "../../../components/utility/safe-area.component";

export const RestaurantDetailScreen = ({ route }) => {
  const [breakfastExpanded, setBreakfastExpanded] = useState(true);

  const { restaurant } = route.params;

  const { rating, priceLevel } = restaurant;

  const ratingString = "Rating: " + rating.toString();
  var priceString = "No pricing data available.";
  var ratioString = "Unavailable";
  var ratio = 0;
  if (priceLevel) {
    priceString = "Pricing: " + priceLevel.toString();
    ratio = rating / priceLevel;
    ratioString = "Price/Rating Ratio: " + ratio.toString();
  }

  return (
    <SafeArea>
      <RestaurantInfoCard restaurant={restaurant} />
      <ScrollView>
        <List.Accordion
          title="Rating/Price Breakdown"
          left={(props) => <List.Icon {...props} icon="account-cash" />}
          expanded={breakfastExpanded}
          onPress={() => setBreakfastExpanded(!breakfastExpanded)}
        >
          <List.Item title={ratingString} />
          <List.Item title={priceString} />
          <List.Item title={ratioString} />
        </List.Accordion>
      </ScrollView>
    </SafeArea>
  );
};
