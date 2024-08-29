import { createWebHashHistory, createRouter } from "vue-router";

import AsyncValidator from "../views/AsyncValidator.vue";
import BuildInTeleport from "../views/BuildInTeleport.vue";
import BuildInTransition from "../views/BuildInTransition.vue";
import BuildInTransitionGroup from "../views/BuildInTransitionGroup.vue";
import Chart from "../views/Chart.vue";
import Directive from "../views/Directive.vue";
import Fetch from "../views/Fetch.vue";
import I18n from "../views/I18n.vue";
import LocationGet from "../views/LocationGet.vue";
import Mouse from "../views/Mouse.vue";
import SlotTest from "../views/SlotTest.vue";
import TestAttribute from "../views/TestAttribute.vue";
import UploadFile from "../views/UploadFile.vue";
import UploadFile2 from "../views/UploadFile2.vue";
import UploadFileCSDN from "../views/UploadFileCSDN.vue";
import UploadFileElementPlus from "../views/UploadFileElementPlus.vue";

const routes = [
  { path: "/validator", component: AsyncValidator },
  { path: "/teleport", component: BuildInTeleport },
  { path: "/transition", component: BuildInTransition },
  { path: "/transition-group", component: BuildInTransitionGroup },
  { path: "/chart", component: Chart },
  { path: "/directive", component: Directive },
  { path: "/fetch", component: Fetch },
  { path: "/i18n", component: I18n },
  { path: "/location-get", component: LocationGet },
  { path: "/mouse", component: Mouse },
  { path: "/slot-test", component: SlotTest },
  { path: "/test-attribute", component: TestAttribute },
  { path: "/upload-file", component: UploadFile },
  { path: "/upload-file2", component: UploadFile2 },
  { path: "/upload-file-csdn", component: UploadFileCSDN },
  { path: "/upload-file-element-plus", component: UploadFileElementPlus },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
