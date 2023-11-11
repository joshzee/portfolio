import { Html } from "@react-three/drei";

const Loader = () => {
  return (
    <Html>
      <div className="flex items-center justify-center">
        <div className="w-20 h-20 border-2 rounded-full border-opacity-20 border-cy border-t-cy animate-spin"></div>
      </div>
    </Html>
  );
};

export default Loader;
