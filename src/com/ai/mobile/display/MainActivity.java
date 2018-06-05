package com.ai.mobile.display;

import android.os.Bundle;
import android.view.KeyEvent;

import com.chinaunicom.sxoss.zsjk.R;
import com.wade.mobile.app.AppRecord;
import com.wade.mobile.app.MobileOperation;
import com.wade.mobile.app.MobileUtil;
import com.wade.mobile.frame.activity.TemplateMainActivity;
import com.wade.mobile.frame.config.ServerConfig;
import com.wade.mobile.ui.comp.dialog.ConfirmBlockDialog;
import com.wade.mobile.ui.view.FlipperLayout;
import com.wade.mobile.util.Messages;

public class MainActivity extends TemplateMainActivity {
	@Override
	public void onCreate(Bundle savedInstanceState) {
		setTheme(R.style.Theme_Sherlock_Light);

		if (AppRecord.isFirst(this) && !MobileUtil.checkWifiActive(this)) {
			ConfirmBlockDialog dialog = new ConfirmBlockDialog(this, "下载提醒",
					"即将下载应用资源,连接wifi将为您节省流量,是否继续下载");
			dialog.show();
			
			if (dialog.getResult() == ConfirmBlockDialog.Result.OK) {
				super.onCreate(savedInstanceState);
			} else {
				MobileOperation.exitApp();
			}
		} else {
			super.onCreate(savedInstanceState);
		}
	}
	//监听返回键
	public boolean onKeyDown(int keyCode, KeyEvent event) {
        if (keyCode == KeyEvent.KEYCODE_BACK) {
           FlipperLayout flipperLayout= getFlipperLayout();
            if(flipperLayout!=null){
                //回到首页的时候就直接退出应用
               String indexPage = null;
			try {
				indexPage = ServerConfig.getInstance().getValue("indexPage");
			} catch (Exception e) {
				e.printStackTrace();
			}
                String tagPage = flipperLayout.getCurrView().getTag().toString();
               if(flipperLayout.isCanBack()&&!indexPage.equals(tagPage)){
                   flipperLayout.back();
                    return true;
               }
            }
           getWadeMobileClient().shutdownByConfirm(Messages.CONFIRM_CLOSE);
            return true;
        }
        return false;
    }
	
	
//	@Override
//	protected void initActivity() throws Exception {
//		MobileScreenLock plugin = getPluginManager().getPlugin(
//				MobileScreenLock.class);
//		plugin.screeUnlock("0", "Index");
//	}
}
