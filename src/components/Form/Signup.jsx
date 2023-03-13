import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import img from '../../images/logo.png'
import { registerSchema } from "../../schema/formSchema";

const textInputClassName =
  "bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500";
  const button =
  "bg-blue-700 border border-gray-300 text-white text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500";

export const Signup = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
      } = useForm({
        resolver: yupResolver(registerSchema),
      });
    
      const formSubmitHandler = (data) => {
        console.log(data);
      };
    
  return (
    <>
     <img
      className="mx-auto h-12 w-auto"
      src={img}
      alt="Workflow"
    />
    <h2 className="mt-6 text-center text-4xl font-extrabold text-gray-900">Criar nova conta</h2>
    <p className="mt-2 text-center text-sm text-gray-600">
    Ou{' '}
      <a href="#" className="font-medium text-indigo-600 hover:text-indigo-500">
      entrar na sua conta existente
      </a>
    </p>
    <div className="w-full p-6 m-auto bg-white w-full p-6 m-auto bg-white rounded-md shadow-sm  ring-2 grey-600 lg:max-w-xl mt-8">
     <div className="md:w-[500px]  shadow-white bg-white w-[320px] mx-auto px-7 py-4 rounded-xl">
      <form onSubmit={handleSubmit(formSubmitHandler)} className="w-full">
        <div className="mb-6">
          <label
            htmlFor="email"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
          >
            Email
          </label>
          <input
            {...register("email")}
            type="email"
            name="email"
            id="email"
            className={textInputClassName}
            placeholder="test@test.com"
          />
          {errors.email ? (
            <span className="text-red-900">{errors.email.message}</span>
          ) : (
            <></>
          )}
        </div>
        <div className="mb-6">
          <label
            htmlFor="email"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
          >
            Confirm Email
          </label>
          <input
            {...register("email")}
            type="email"
            name="email"
            id="email"
            className={textInputClassName}
            placeholder="test@test.com"
          />
          {errors.email ? (
            <span className="text-red-900">{errors.email.message}</span>
          ) : (
            <></>
          )}
        </div>

        <div className="mb-6">
          <label
            htmlFor="password"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
          >
            Your password
          </label>
          <input
            {...register("password")}
            type="password"
            name="password"
            id="password"
            className={textInputClassName}
          />
          {errors.password ? (
            <span className="text-red-900">{errors.password.message}</span>
          ) : (
            <></>
          )}
        </div>

        <div className="flex justify-between mb-6">
          <div>
            <div className="flex">
              <div className="flex items-center h-5">
                <input
                  {...register("remember")}
                  id="remember"
                  name="remember"
                  type="checkbox"
                  value=""
                  className="w-4 h-4 bg-gray-50 rounded border border-gray-300 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800"
                />
              </div>
              <label
                htmlFor="remember"
                className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
              >
               Eu li e aceito os termos de uso, termos de licença de uso de software, política de conteúdo da Kiwify
              </label>
            </div>
            {errors.remember ? (
              <span className="text-red-900">{errors.remember.message}</span>
            ) : (
              <></>
            )}
          </div>

        </div>

        <button
          type="submit"
          className={button}
       >
          Entar
        </button>
      </form>
    </div>
    
   </div> 
   </>
  );
}
