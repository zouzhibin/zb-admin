// translate router.meta.title, be used in breadcrumb sidebar tagsview
import I18n from "@/language/index";
export function generateTitle(route) {
  // 检查 key 是否存在
  const hasKey = I18n.global.te('route.' + route.name)
  if (hasKey) {
    const translatedTitle = I18n.global.t('route.' + route.name)
    return translatedTitle
  }
  return route?.meta?.title
}
