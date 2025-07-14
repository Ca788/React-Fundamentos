import React, { useMemo } from "react";
import { useParams, useLocation } from "react-router-dom";

export default function PostId() {
  const params = useParams();
  const { search } = useLocation();
  const queryParams = useMemo(() => new URLSearchParams(search), [search]);

  return <h1>PostId page</h1>;
}
