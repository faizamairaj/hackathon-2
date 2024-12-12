export const formatPrice = {
  // Format to Rupiah
  toRupiah: (price: number) => {
    return `Rp ${price.toLocaleString('id-ID')}`;
  },
  
  // Convert Rupiah string to number
  parseRupiah: (priceString: string) => {
    return Number(priceString.replace(/[^0-9.-]+/g, ""));
  }
}; 