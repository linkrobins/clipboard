import app from 'flarum/admin/app';

app.initializers.add('linkrobins/clipboard', () => {
  const t = (key: string) => app.translator.trans(`linkrobins-clipboard.admin.settings.${key}`);

  const themes = {
    default: t('themes.default'),
    github: t('themes.github'),
    lingcoder: t('themes.lingcoder'),
    csdn: t('themes.csdn'),
    cnblog: t('themes.cnblog'),
    jianshu: t('themes.jianshu'),
    segmentfault: t('themes.segmentfault'),
  };

  app.registry
    .for('linkrobins-clipboard')

    .registerSetting({
      setting: 'linkrobins-clipboard.is_copy_enable',
      type: 'boolean',
      label: t('copy_enable_label'),
      help: t('copy_enable_help'),
    })

    .registerSetting({
      setting: 'linkrobins-clipboard.theme_name',
      type: 'select',
      options: themes,
      default: 'default',
      label: t('themes_label'),
      help: t('themes_help'),
    })

    .registerSetting({
      setting: 'linkrobins-clipboard.is_show_codelang',
      type: 'boolean',
      label: t('codeLang_label'),
      help: t('codeLang_help'),
    });
});
