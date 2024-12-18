// components/BillingSummary.tsx
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

interface BillingSummaryProps {
  total: number;
}

const BillingSummary: React.FC<BillingSummaryProps> = ({ total }) => {
  return (
    <View style={styles.billingContainer}>
      <View style={styles.billingRow}>
        <Text style={styles.billingLabel}>Item Total</Text>
        <Text style={styles.billingValue}>Rs {total}</Text>
      </View>
      <View style={styles.billingRow}>
        <Text style={styles.billingLabel}>Delivery Fee</Text>
        <Text style={styles.billingValue}>Rs 15.00</Text>
      </View>
      <View style={styles.billingRow}>
        <Text style={styles.billingLabel}>Delivery Partner Fee</Text>
        <Text style={styles.billingValue}>RS 5.00</Text>
      </View>
      <View style={[styles.billingRow, styles.totalRow]}>
        <Text style={styles.billingTotalLabel}>To Pay</Text>
        <Text style={styles.billingTotalValue}>Rs {total + 90}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
    billingContainer: {
        backgroundColor: "rgba(255, 255, 255, 0.05)",
        margin: 10,
        borderRadius: 15,
        padding: 10,
      },
      billingRow: {
        flexDirection: "row",
        justifyContent: "space-between",
        marginVertical: 5,
      },
      billingLabel: {
        fontSize: 14,
        color: "#ffffffb3",
      },
      billingValue: {
        fontSize: 14,
        color: "#00d4ff",
      },
      totalRow: {
        borderTopWidth: 1,
        borderTopColor: "rgba(255, 255, 255, 0.2)",
        paddingTop: 10,
        marginTop: 10,
      },
      billingTotalLabel: {
        fontSize: 16,
        fontWeight: "bold",
        color: "white",
      },
      billingTotalValue: {
        fontSize: 16,
        fontWeight: "bold",
        color: "#fd5c63",
      },
});

export default BillingSummary;
