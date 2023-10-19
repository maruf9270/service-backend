import React from "react";
import { Badge, Descriptions } from "antd";
import type { DescriptionsProps } from "antd";

const DescrioptionRe = ({
  props,
  title,
}: {
  props: DescriptionsProps["items"];
  title: string;
}) => <Descriptions title={title} layout="vertical" bordered items={props} />;

export default DescrioptionRe;
