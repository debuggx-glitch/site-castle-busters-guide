import NextLink from "next/link";
import type {ComponentProps} from "react";

const newTabProps = {target:"_blank",rel:"noopener noreferrer"} as const;

export function NewTabLink(props:ComponentProps<typeof NextLink>) {
  return <NextLink {...props} {...newTabProps}/>;
}

export function NewTabAnchor(props:ComponentProps<"a">) {
  return <a {...props} {...newTabProps}/>;
}
