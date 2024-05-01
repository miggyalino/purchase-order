export const fetchProducts = async () => {
  try {
    const response = await fetch(`http://localhost:3000/api/products`, {
      next: {
        revalidate: 0,
      },
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const result = await response.json();
    return result;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

export const fetchVendors = async () => {
  try {
    const response = await fetch(`http://localhost:3000/api/vendors`, {
      next: {
        revalidate: 0,
      },
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const result = await response.json();
    return result;
  } catch (error) {
    console.error(error);
    throw error;
  }
};
