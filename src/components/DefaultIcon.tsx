import { Tooltip } from "@mui/material";

export default function DefaultIcon({ size = 30, component: IconComponent, name = ""}: any) {
    return <Tooltip title={name}>
      <div>
        <IconComponent size={size} />
      </div>
    </Tooltip>
  }