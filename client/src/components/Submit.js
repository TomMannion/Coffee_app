import React from "react";
import { useSelector } from "react-redux";
import Button from "@mui/material/Button";
import axios from "axios";

function Submit() {
  const submitAll = useSelector((state) => state);

  // const brewImage = (brewMethod) => {
  //   switch (brewMethod) {
  //     case /Aeropress/i.test(brewMethod):
  //       return "https://www.aeropress.com/wp-content/uploads/2019/03/AeroPress-Logo-1.png";
  //     case /Chemex/i.test(brewMethod):
  //       return "https://www.chemexcoffeemaker.com/wp-content/uploads/2019/03/chemex-logo.png";
  //     case /French Press/i.test(brewMethod):
  //       return "https://www.frenchpresscoffee.com/wp-content/uploads/2019/03/french-press-logo.png";
  //     case /Pour Over/i.test(brewMethod):
  //       return "https://www.pourovercoffee.com/wp-content/uploads/2019/03/pour-over-logo.png";
  //     case /V60/i.test(brewMethod):
  //       console.log("V60");
  //       return "https://www.v60coffee.com/wp-content/uploads/2019/03/v60-logo.png";
  //     case "Espresso":
  //       return "https://www.espresso.co/wp-content/uploads/2019/03/espresso-logo.png";
  //     case /Cold Brew/i.test(brewMethod):
  //       return "https://www.coldbrewcoffee.com/wp-content/uploads/2019/03/cold-brew-logo.png";
  //     case "Turkish":
  //       return "https://www.turkishcoffee.com/wp-content/uploads/2019/03/turkish-logo.png";
  //     case /Moka Pot/i.test(brewMethod):
  //       return "https://www.mokapotcoffee.com/wp-content/uploads/2019/03/moka-pot-logo.png";
  //     case /Siphon/i.test(brewMethod):
  //       return "https://www.siphoncoffee.com/wp-content/uploads/2019/03/siphon-logo.png";
  //     case /Kalita Wave/i.test(brewMethod):
  //       return "https://www.kalitawave.com/wp-content/uploads/2019/03/kalita-logo.png";
  //     case /V60/i.test(brewMethod):
  //       return "https://www.hariov60.com/wp-content/uploads/2019/03/hario-v60-logo.png";
  //     case /Clever Dripper/i.test(brewMethod):
  //       return "https://www.cleverdripper.com/wp-content/uploads/2019/03/clever-logo.png";
  //   }
  // };

  const formatSubmit = () => {
    const formattedSubmit = {
      roaster: submitAll.roaster.value,
      origin: submitAll.origin.value,
      brewMethod: submitAll.brewMethod.value,
      grinder: submitAll.grinder.value,
      grindSize: submitAll.grindSize.value,
      pourGroup: submitAll.pourGroup.value.map((pour) => {
        return { pourWeight: pour.pour, pourTime: pour.time };
      }),
      comment: submitAll.comment.value,
      coffeeWeight: submitAll.amount.value,
      waterTemp: submitAll.waterTemp.value,
      method: submitAll.method.value,
      title: submitAll.title.value,
      tasteProfile: submitAll.slider.value,
      image: "https://picsum.photos/200",
    };
    return formattedSubmit;
  };

  const handleSubmit = async () => {
    console.log(formatSubmit());
    await axios.post("http://localhost:3500/posts/create", formatSubmit());
    window.location.reload(false);
  };

  return (
    <Button
      variant="contained"
      onClick={() => {
        handleSubmit();
      }}
    >
      Submit
    </Button>
  );
}

export default Submit;
