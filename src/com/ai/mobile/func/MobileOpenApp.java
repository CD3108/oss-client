package com.ai.mobile.func;

import org.json.JSONArray;

import android.content.ComponentName;
import android.content.Intent;

import com.ailk.common.data.IData;
import com.ailk.common.data.impl.DataMap;
import com.wade.mobile.app.MobileUtil;
import com.wade.mobile.app.SimpleUpdate;
import com.wade.mobile.frame.IWadeMobile;
import com.wade.mobile.frame.plugin.Plugin;
import com.wade.mobile.ui.helper.HintHelper;

public class MobileOpenApp extends Plugin {

	public MobileOpenApp(IWadeMobile wademobile) {
		super(wademobile);
		// TODO Auto-generated constructor stub
	}

	public void openNative(JSONArray param) throws Exception {
		String appStr = param.getString(0);
		IData appInfo = new DataMap(appStr);
		String packageName = appInfo.getString("packageName", "");
		String className = appInfo.getString("className", "");
		String downloadUrl = appInfo.getString("downloadUrl", "");

		if (MobileUtil.checkActivity(context, packageName, className)) {// 应用的Activity是否存在

			ComponentName cn = new ComponentName(packageName, className);
			Intent intent = new Intent();
			intent.setComponent(cn);
			startActivityForResult(intent, 0);
		} else {
			HintHelper.tip(context, "正在下载，请稍后...", 1);

			/* 如果应用不存在则需要下载，配置需要下载应用 */
			SimpleUpdate simpleUpdate = new SimpleUpdate(context, downloadUrl);
			simpleUpdate.update();

		}

	}

}
