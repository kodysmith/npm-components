module.exports = function (grunt, options) {
    
    var path = require('path');
    /*
    ** Precompile task used for the i18n
    **
    ** @option {Object} localeFilesExpandPatterns - A object value, normally it should specify the i18n/locales folder in the app source folder and where all the soruce files should be coped into the deployment build environment, this value normally is a pattern value which can be passed into the grunt API `grunt.file.expandMapping`
    ** @option {Array} implementedLocalesList - specify the implemented locales list for this application
    ** @option {Function} getTemplateFilePath - return the template file path in deployment folder structure, make sure the returned template file path should be in the same folder with the associated properties file like below:
                                             i18n/<locale>/tempaltes/
                                                                    --header.poperties
                                                                    --header.dust
                          The key point in this example is the header.dust must be put together with the header.properties in the same folder
    ** @option {Function} getScriptsPropsFilePath - return the generated javascript properties file path in deployment folder structure
    ** @option {String} scriptsPropsFileName - specify the generated javascript properties file name
    */
    return {
        dev:{
            options:{
                localeFilesExpandPatterns: {
                  src: ['**/*.properties'],
                  dest: '../compiled/<%= i18nRootPath %>',
                  cwd: 'i18n'
                },
                implementedLocalesList: options.implementedLocalesList,
                getTemplateFilePath: function (settings) {
                    var task = settings.task,
                        i18nRootPath = grunt.config.get([task.name, task.target, 'options', 'localeFilesExpandPatterns', 'dest']),
                        locale = settings.locale,
                        filepath = settings.filepath,
                        templatespath = '',
                        destpath = '';

                    templatespath = filepath;
                    destpath = path.join(i18nRootPath, locale, templatespath);

                    return destpath;
                },
                getScriptsPropsFilePath: function (settings) {
                    var locale = settings.locale,
                        scriptsPropsFileName = settings.scriptsPropsFileName,
                        buildDevPath = grunt.config.get('buildDevPath'),
                        featureScriptsPath = grunt.config.get('componentScriptPath'),
                        destpath = '';
                    
                    destpath = path.join(buildDevPath, featureScriptsPath, locale, scriptsPropsFileName + '.js');

                    return destpath;
                },
                keyPrefix: 'common.components.' + '<%= pkg.name %>',
                scriptsPropsFileName: '<%= scriptsPropsFileName %>'
            },
            src: ['templates/**/*.dust']
        },
        prod:{
            options:{
                localeFilesExpandPatterns: {
                  src: ['**/*.properties'],
                  dest: '<%= buildProdPath %><%= i18nRootPath %>',
                  cwd: 'i18n'
                },
                implementedLocalesList: options.implementedLocalesList,
                getTemplateFilePath: function (settings) {
                    var task = settings.task,
                        i18nRootPath = grunt.config.get([task.name, task.target, 'options', 'localeFilesExpandPatterns', 'dest']),
                        locale = settings.locale,
                        filepath = settings.filepath,
                        templatespath = '',
                        destpath = '';

                    templatespath = filepath;
                    destpath = path.join(i18nRootPath, locale, templatespath);

                    return destpath;
                },
                getScriptsPropsFilePath: function (settings) {
                    var locale = settings.locale,
                        scriptsPropsFileName = settings.scriptsPropsFileName,
                        buildProdPath = grunt.config.get('buildProdPath'),
                        featureScriptsPath = grunt.config.get('componentScriptPath'),
                        destpath = '';
                    
                    destpath = path.join(buildProdPath, featureScriptsPath, locale, scriptsPropsFileName + '.js');

                    return destpath;
                },
                keyPrefix: 'common.components.' + '<%= pkg.name %>',
                scriptsPropsFileName: '<%= scriptsPropsFileName %>'
            },
            src: ['templates/**/*.dust']
        }
    };
};