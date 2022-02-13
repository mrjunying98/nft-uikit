import React from "react";
import Button from "../../components/Button/Button";
import Text from "../../components/Text/Text";
import { localStorageKey } from "./config";
import { Login, Config } from "./types";

interface Props {
  walletConfig: Config;
  login: Login;
  onDismiss: () => void;
  mb: string;
}

const WalletCard: React.FC<Props> = ({ login, walletConfig, onDismiss, mb }) => {
  const { title, icon: Icon } = walletConfig;
  return (
    <Button
      fullWidth
      style={{ justifyContent: "space-between" , backgroundColor: "#000000", color: "#FFFFFF", lineHeight: "16px", fontSize: "0.88rem", boxShadow:"-0.16em -0.2em #FFFF00, 0.16em 0.2em #0000FF"}}
      onClick={() => {
        login(walletConfig.connectorId);
        window.localStorage.setItem(localStorageKey, "1");
        onDismiss();
      }}
      mb={mb}
      id={`wallet-connect-${title.toLocaleLowerCase()}`}
    >
      <Text bold color="primary" mr="16px">
        {title}
      </Text>
      <Icon width="32px" />
    </Button>
  );
};

export default WalletCard;
