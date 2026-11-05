import { Star, ShoppingCart } from "lucide-react";

export default function KitCard({ kit }) {
  const { name, price, rating, reviews, grade, image, description } = kit;

  return (
    <div className="glass card-hover flex flex-col overflow-hidden">
      <div className="overflow-hidden rounded-t-[24px]">
        <img
          src={image}
          alt={name}
          className="w-full h-52 object-cover"
        />
      </div>

      <div className="p-6 flex flex-col flex-1">
        <span className="inline-flex self-start rounded-full bg-[#d1fae5] text-[#059669] text-xs font-medium px-3 py-1 mb-3">
          {grade || "Grade A parts"}
        </span>

        <h3 className="text-[var(--color-text)] font-semibold text-lg mb-2">
          {name}
        </h3>

        {description && (
          <p className="text-[#4d6b66] text-sm mb-3 line-clamp-2">
            {description}
          </p>
        )}

        <div className="flex items-center gap-1.5 mb-4">
          <div className="flex items-center gap-0.5">
            {Array.from({ length: 5 }).map((_, i) => (
              <Star
                key={i}
                className={`w-4 h-4 ${
                  i < Math.round(rating)
                    ? "fill-amber-400 text-amber-400"
                    : "text-gray-300"
                }`}
              />
            ))}
          </div>
          <span className="text-sm font-medium text-[var(--color-text)]">
            {rating}
          </span>
          <span className="text-sm text-[#4d6b66]">({reviews})</span>
        </div>

        <div className="mt-auto">
          <p className="font-bold text-xl text-[#0f766e] mb-4">
            ₹{price.toLocaleString("en-IN")}
          </p>
          <button className="btn-accent w-full flex items-center justify-center gap-2">
            <ShoppingCart className="w-4 h-4" />
            Add to cart
          </button>
        </div>
      </div>
    </div>
  );
}
