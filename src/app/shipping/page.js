"use Client";

import CheckoutWizard from "@/components/CheckoutWizard";
import { saveShippingAddress } from "@/redux/slices/cartSlice";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";

export default function ShippingAddressPage() {
  const {
    handleSubmit,
    register,
    formState: { errors },
    setValue,
  } = useForm();

  const router = useRouter();
  const dispatch = useDispatch();
  const { shippingAddress } = useSelector((state) => state.cart);

  useEffect(() => {
    setValue("fullName", shippingAddress.fullName);
    setValue("address", shippingAddress.adress);
    setValue("city", shippingAddress.city);
    setValue("postalCode", shippingAddress.postalCode);
    setValue("country", shippingAddress.country);
  }, [setValue, shippingAddress]);

  const submitHandler = ({ fullName, address, city, postalCode, country }) => {
    dispatch(saveShippingAddress({ fullName, address, city, postalCode, country }));
    router.push("/payment");
  };
  return (
    <div>
      <CheckoutWizard />
      <form className='mx-auto max-w-screen-md' onSubmit={handleSubmit(submitHandler)}>
        <h1 className='mb-4 text-xl'>Shipping Address</h1>
        <div className='mb-4'>
          <label htmlFor='fullName'>Full Name</label>
          <input
            className='w-full'
            id='fullName'
            autoFocus
            {...register("fullName", { required: "Please enter full name" })}
          />
          {errors.fullName && <div className='text-red-500'>{errors.fullName.message}</div>}
        </div>
        <div className='mb-4'>
          <label htmlFor='address'>Address</label>
          <input
            className='w-full'
            id='address'
            {...register("address", {
              required: "Please enter address",
              minLength: { value: 3, message: "Address is more than 2 chars" },
            })}
          />
          {errors.address && <div className='text-red-500'>{errors.address.message}</div>}
        </div>
        <div className='mb-4'>
          <label htmlFor='postalCode'>Postal Code</label>
          <input
            className='w-full'
            id='postalCode'
            {...register("postalCode", { required: "Please enter postal code" })}
          />
          {errors.postalCode && <div className='text-red-500'>{errors.postalCode.message}</div>}
          <div className='mb-4'>
            <label htmlFor='country'>Country</label>
            <input
              className='w-full'
              id='country'
              {...register("country", { required: "Please enter country" })}
            />
            {errors.country && <div className='text-red-500'>{errors.country.message}</div>}
          </div>
          <div className='mb-4 flex justify-between'>
            <button className='primary-button'>Next</button>
          </div>
        </div>
      </form>
    </div>
  );
}
