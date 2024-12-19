import { useAuth } from "@clerk/clerk-react";
import axios from "axios";
import { useEffect } from "react";
import toast from "react-hot-toast";
import { useDispatch } from "react-redux";
import { userCreditScore } from "../redux/reducers/user_credits";

const useGetuserCredites = () => {
  const dispatch = useDispatch();
  const baseUrl = import.meta.env.VITE_BASE_URL;
  const { getToken } = useAuth();

  useEffect(() => {
    const getData = async () => {
      const token = await getToken();
      try {
        const res = await axios.get(`${baseUrl}/api/user/getCredites`, {
          headers: {
            token,
          },
        });
        const data = res.data as UserCreditesResponseMsg;
        // set the state of credits to render on UI
        dispatch(userCreditScore({ credits: data.credits }));
        console.log("data:", data);
        // show the toast success msg to show credits
        toast.success("Credits updated");
      } catch (error) {
        console.log("error:", error);
        toast.error("something went wrong");
      }
    };

    getData();
  }, [dispatch, baseUrl, getToken]);
};

export default useGetuserCredites;
