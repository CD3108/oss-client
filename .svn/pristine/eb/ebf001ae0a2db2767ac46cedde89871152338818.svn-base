package com.ai.ipu.mobile.push;

import io.yunba.android.manager.YunBaManager;

import org.eclipse.paho.client.mqttv3.IMqttActionListener;
import org.eclipse.paho.client.mqttv3.IMqttToken;
import org.eclipse.paho.client.mqttv3.MqttException;
import org.json.JSONArray;
import org.json.JSONException;
import org.json.JSONObject;

import android.content.BroadcastReceiver;
import android.content.Context;
import android.content.Intent;
import android.content.IntentFilter;
import android.util.Log;

import com.ai.mobile.im.PushManager;
import com.ai.mobile.im.util.PushSharedPrefHelper;
import com.wade.mobile.frame.IWadeMobile;
import com.wade.mobile.frame.plugin.Plugin;
import com.wade.mobile.helper.SharedPrefHelper;
import com.wade.mobile.util.EscapeUnescape;

public class YunBaPush extends Plugin {

	private final String PUSH_CALLBACK = "PUSH_CALLBACK";

	private BroadcastReceiver msgReceiver;

	private String topic = "IPU";

	private String alias;

	public YunBaPush(IWadeMobile wademobile) {
		super(wademobile);
	}

	public void registerForPush(JSONArray param) throws Exception {

		/* YunBa Start */
		YunBaManager.start(context.getApplicationContext());

		// 订阅
		subscribeTopic(new String[] { topic });

		// 注册昵称
		alias = param.getString(0);
		reigisterYuBaAlias(alias);

		// Receiver
		registerYuBaReceiver();

		/* YunBa End */

	}

	private void subscribeTopic(String[] topics) {
		YunBaManager.subscribe(context.getApplicationContext(), topics,
				new IMqttActionListener() {

					@Override
					public void onSuccess(IMqttToken arg0) {
						YunBaUtil.showToast("连接成功", context);
						YunBaPush.this.callback("SUC");
					}

					@Override
					public void onFailure(IMqttToken arg0, Throwable arg1) {
						Log.d(TAG, "Subscribe topic failed");
					}
				});
	}

	private void reigisterYuBaAlias(String alias) {
		if (YunBaUtil.isEmpty(alias)) {
			YunBaUtil.showToast("alias不能为空", context);
			return;
		}
		YunBaManager.setAlias(context.getApplicationContext(), alias,
				new IMqttActionListener() {
					@Override
					public void onSuccess(IMqttToken asyncActionToken) {
						Log.d(TAG, "success");
					}

					@Override
					public void onFailure(IMqttToken asyncActionToken,
							Throwable exception) {
						if (exception instanceof MqttException) {
							MqttException ex = (MqttException) exception;
							String msg = "setAlias failed with error code : "
									+ ex.getReasonCode();
							YunBaUtil.showToast(msg,
									context.getApplicationContext());
						}
					}
				});
	}

	private void registerYuBaReceiver() {
		if (msgReceiver == null) {
			msgReceiver = new BroadcastReceiver() {

				@Override
				public void onReceive(Context context, Intent intent) {

					if (YunBaManager.MESSAGE_RECEIVED_ACTION.equals(intent
							.getAction())) {
						String topic = intent
								.getStringExtra(YunBaManager.MQTT_TOPIC);
						String msg = intent
								.getStringExtra(YunBaManager.MQTT_MSG);

						//  在这里处理从服务器发布下来的消息， 比如显示通知栏， 打开 Activity 等等
						StringBuilder showMsg = new StringBuilder();
						showMsg.append("Received message from server: ")
								.append(YunBaManager.MQTT_TOPIC).append(" = ")
								.append(topic).append(" ")
								.append(YunBaManager.MQTT_MSG).append(" = ")
								.append(msg);
						 YunBaUtil.showNotifation(context, topic, msg);
						Log.d("", showMsg.toString());
						try {
							String aliasStr = null;
							String contentStr = null;
							String resultStr = null;
							if (!msg.startsWith("{")) {
								resultStr = "{\"ALIAS\":\"匿名用户\",\"MSG\":\""
										+ msg + "\"}";
							} else {
								JSONObject msgJson = new JSONObject(msg);
								aliasStr = msgJson.getString("ALIAS");
								contentStr = msgJson.getString("MSG");

								aliasStr = YunBaUtil.isEmpty(aliasStr) ? "匿名用户"
										: aliasStr;

								resultStr = "{\"ALIAS\":\"" + aliasStr
										+ "\",\"MSG\":\"" + contentStr + "\"}";
							}

							sendCallbackMsg(resultStr);
						} catch (JSONException e) {
							e.printStackTrace();
						}

					}else if(YunBaManager.PRESENCE_RECEIVED_ACTION.equals(intent.getAction())) {
						 //此消息由当前客户端发出，暂时不处理
						
							
					}
				}
			};

			IntentFilter msgFilter = new IntentFilter();
			msgFilter.addAction("io.yunba.android.MESSAGE_RECEIVED_ACTION");
			msgFilter.addCategory(context.getPackageName());
			context.registerReceiver(msgReceiver, msgFilter);
		}
	}

	public void unregisterForPush(JSONArray param) {

		if (msgReceiver != null) {
			context.unregisterReceiver(msgReceiver);
			msgReceiver = null;

			YunBaManager.unsubscribe(context.getApplicationContext(),
					new String[] { topic }, new IMqttActionListener() {

						@Override
						public void onSuccess(IMqttToken arg0) {
							Log.d(TAG, "unsubscribe topic succeed");
						}

						@Override
						public void onFailure(IMqttToken arg0, Throwable arg1) {
							Log.d(TAG, "unsubscribe topic failed");
						}
					});
		}
	}

	@Override
	public void onStop() {
		YunBaManager.stop(context.getApplicationContext());
		unregisterForPush(null);
		super.onStop();
	}

	public void setCallbackForPush(JSONArray param) throws Exception {
		String callback = param.getString(0);
		new SharedPrefHelper(context).put(PushManager.PUSH_STORAGE,
				PUSH_CALLBACK, callback);
	}

	public void sendText(JSONArray param) throws Exception {
		String receiver = param.getString(0);
		String msg = param.getString(1);
		final String content = "{\"ALIAS\":\"" + alias + "\",\"MSG\":\"" + msg
				+ "\"}";
		if ("ALL".equals(receiver)) {
			YunBaManager.publish(context.getApplicationContext(), topic,
					content, new IMqttActionListener() {
						@Override
						public void onSuccess(IMqttToken asyncActionToken) {
							String topic = YunBaUtil.join(
									asyncActionToken.getTopics(), ", ");
							String msgLog = "publish to alias succeed : "
									+ topic;
							YunBaUtil.showToast(msgLog,
									context.getApplicationContext());
							YunBaPush.this.callback("SUC");
						}

						@Override
						public void onFailure(IMqttToken asyncActionToken,
								Throwable exception) {
							if (exception instanceof MqttException) {
								MqttException ex = (MqttException) exception;
								String msg = "publishToAlias failed with error code : "
										+ ex.getReasonCode();
								YunBaUtil.showToast(msg,
										context.getApplicationContext());
							}
						}
					});
		} else {
			YunBaManager.publishToAlias(context.getApplicationContext(),
					receiver, content, new IMqttActionListener() {
						@Override
						public void onSuccess(IMqttToken asyncActionToken) {
							String topic = YunBaUtil.join(
									asyncActionToken.getTopics(), ", ");
							String msgLog = "publish to alias succeed : "
									+ topic;
							YunBaUtil.showToast(msgLog,
									context.getApplicationContext());
							YunBaPush.this.callback("SUC");
							sendCallbackMsg(content);
						}

						@Override
						public void onFailure(IMqttToken asyncActionToken,
								Throwable exception) {
							if (exception instanceof MqttException) {
								MqttException ex = (MqttException) exception;
								String msg = "publishToAlias failed with error code : "
										+ ex.getReasonCode();
								YunBaUtil.showToast(msg,
										context.getApplicationContext());
							}
						}
					});
		}

	}

	private void sendCallbackMsg(String resultStr) {
		callback = PushSharedPrefHelper.get(wademobile.getActivity(),
				PushManager.PUSH_STORAGE, PUSH_CALLBACK, "alert");
		callback = "(function(msg){" + callback + "(unescape(msg));})";// 转义

		wademobile.getCurrentWebView().executeJs(
				callback + "('" + EscapeUnescape.escape(resultStr) + "')");
	}

}
