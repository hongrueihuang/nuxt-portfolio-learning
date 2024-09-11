import type {
	RouterScrollBehavior,
	RouteLocationNormalizedGeneric,
	RouteLocationNormalizedLoadedGeneric,
} from "vue-router";

export default {
	scrollBehavior(
		to: RouteLocationNormalizedGeneric,
		from: RouteLocationNormalizedLoadedGeneric,
		savedPosition: any
	) {
		if (savedPosition) {
			return savedPosition;
		}

		if (to.hash) {
			return {
				el: to.hash,
				behavior: "smooth",
				top: 80,
			};
		}

		return { top: 0, left: 0, behavior: "smooth" };
	},
};
