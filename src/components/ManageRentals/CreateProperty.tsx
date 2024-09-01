import { useForm, SubmitHandler } from "react-hook-form";
import { toast } from "sonner";

type Inputs = {
  name: string;
  location: string;
  price: string;
  image: string;
};

const CreateProperty = () => {
  const { register, handleSubmit, reset } = useForm<Inputs>();

  const onSubmit: SubmitHandler<Inputs> = async (data) => {
    try {
      const response = await fetch("http://localhost:5000/properties", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        toast.success("Property added successfully!");
        reset(); // Reset the form after successful submission
      } else {
        toast.error("Failed to add property. Please try again.");
      }
    } catch (error) {
      toast.error("An error occurred. Please try again.");
    }
  };

  return (
    <div className="bg-[#001529]  px-8 py-12 min-h-screen">
      <h1 className="text-3xl font-bold text-center my-12 text-white">
        Add a testimonial about the donation
      </h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="gap-4 mb-8">
          <div className="w-1/2 mx-auto">
            <h2 className="text-white font-semibold my-3">Property Name</h2>
            <input
              required
              placeholder="Name"
              className="h-8 rounded-md w-full px-3"
              {...register("name")}
            />
          </div>
          <div className="w-1/2 mx-auto">
            <h2 className="text-white font-semibold my-3">Location</h2>
            <input
              placeholder="Location"
              className="h-8 rounded-md w-full px-3"
              {...register("location")}
            />
          </div>
          <div className="w-1/2 mx-auto">
            <h2 className="text-white font-semibold my-3">Price</h2>
            <input
              type="number"
              placeholder="Price"
              className="h-8 rounded-md w-full px-3"
              {...register("price")}
            />
          </div>
          <div className="w-1/2 mx-auto">
            <h2 className="text-white font-semibold my-3">Property Image</h2>
            <input
              type="url"
              placeholder="Photo url"
              className="h-8 rounded-md w-full px-3"
              {...register("image")}
            />
          </div>
        </div>

        <div className="text-center my-12 font-bold">
          <input
            className="py-4 px-8 bg-white text-blue-700  rounded-md"
            type="submit"
            value="Add Property"
          />
        </div>
      </form>
    </div>
  );
};

export default CreateProperty;
