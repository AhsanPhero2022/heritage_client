import { toast } from "sonner";
import { useEffect, useState } from "react";

type TData = {
  name: string;
  _id: string;
  image: string;
  location: string;
  price: number;
};

const AllProperty = () => {
  const [properties, setProperties] = useState<TData[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("http://localhost:5000/properties");
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const data = await response.json();
        setProperties(data);
      } catch (error) {
        console.error("There was a problem with the fetch operation:", error);
        toast.error("Failed to fetch properties.");
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const handleDelete = async (id: string) => {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this property?"
    );
    if (!confirmDelete) return;

    try {
      const response = await fetch(`http://localhost:5000/properties/${id}`, {
        method: "DELETE",
      });

      if (response.ok) {
        setProperties((prev) => prev.filter((property) => property._id !== id));
        toast.success("Property deleted successfully!");
      } else {
        toast.error("Failed to delete property.");
      }
    } catch (error) {
      console.error("There was a problem with the delete operation:", error);
      toast.error("An error occurred. Please try again.");
    }
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <div className="overflow-x-auto">
        <table className="table">
          <thead>
            <tr>
              <th>Image</th>
              <th>Name</th>
              <th>Location</th>
              <th>Price</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            {properties.map((item: TData) => (
              <tr key={item._id}>
                <td>
                  <div className="flex items-center gap-3">
                    <div className="avatar">
                      <div className="mask mask-squircle w-12 h-12">
                        <img src={item.image} alt="Property" />
                      </div>
                    </div>
                  </div>
                </td>
                <td>{item.name}</td>
                <td>{item.location}</td>
                <th>
                  <p>${item.price}</p>
                </th>
                <th>
                  <button
                    className="btn bg-red-500"
                    onClick={() => handleDelete(item._id)}
                  >
                    Delete
                  </button>
                </th>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AllProperty;
