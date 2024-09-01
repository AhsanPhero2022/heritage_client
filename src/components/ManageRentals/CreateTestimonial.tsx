import { useForm, SubmitHandler } from "react-hook-form";
import { toast } from "sonner";

type Inputs = {
  name: string;
  src: string;
  title: string;
  description: string;
};

const CreateTestimonial = () => {
  const { register, handleSubmit, reset } = useForm<Inputs>();

  const onSubmit: SubmitHandler<Inputs> = async (data) => {
    try {
      const response = await fetch("http://localhost:5000/testimonials", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        toast.success("Testimonial added successfully!");
        reset(); // Reset the form after successful submission
      } else {
        toast.error("Failed to add testimonial Please try again.");
      }
    } catch (error) {
      toast.error("An error occurred. Please try again.");
    }
  };

  return (
    <div className="bg-[#001529]  px-8 py-12 min-h-screen">
      <h1 className="text-3xl font-bold text-center my-12 text-white">
        Add a testimonial about the Property
      </h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className=" gap-4 mb-8">
          <div className="w-1/2 mx-auto">
            <h2 className="text-white font-semibold my-3">Name</h2>
            <input
              required
              placeholder="Enter Title"
              className="h-8 rounded-md w-full px-3"
              {...register("name")}
            />
          </div>
          <div className="w-1/2 mx-auto">
            <h2 className="text-white font-semibold my-3">Title</h2>
            <input
              required
              placeholder="Enter Title"
              className="h-8 rounded-md w-full px-3"
              {...register("title")}
            />
          </div>
          <div className="w-1/2 mx-auto">
            <h2 className="text-white font-semibold my-3">Image</h2>
            <input
              placeholder="Photo url"
              className="h-8 rounded-md w-full px-3"
              {...register("src")}
            />
          </div>
        </div>

        <div className="w-1/2 mx-auto">
          <h2 className="text-white font-semibold my-3">Description</h2>
          <input
            required
            placeholder="Write description"
            className="h-16 rounded-md w-full px-3"
            {...register("description")}
          />
        </div>

        <div className="text-center my-12 font-bold">
          <input
            className="py-4 px-8 bg-white text-blue-700  rounded-md"
            type="submit"
          />
        </div>
      </form>
    </div>
  );
};

export default CreateTestimonial;
