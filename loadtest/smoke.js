/* global __ENV */
import http from "k6/http";
import { check, sleep } from "k6";

export const options = {
  vus: 5,
  duration: "30s",
  thresholds: {
    http_req_failed: ["rate<0.01"],
    http_req_duration: ["p(95)<800"],
  },
};

const BASE = __ENV.BASE_URL || "http://127.0.0.1:3000";
const PAGES = ["/", "/about", "/project", "/skills", "/experience", "/contact"];

export default function () {
  for (const p of PAGES) {
    const res = http.get(`${BASE}${p}`);
    check(res, { [`${p} status 200`]: (r) => r.status === 200 });
  }
  sleep(1);
}
