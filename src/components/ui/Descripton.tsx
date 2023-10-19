import React from "react";
import { Badge, Descriptions } from "antd";
import type { DescriptionsProps } from "antd";

const DescrioptionRe = ({ props }: { props: DescriptionsProps["items"] }) => (
  <Descriptions title="Service Info" layout="vertical" bordered items={props} />
);

export default DescrioptionRe;
