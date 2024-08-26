import React from 'react';

const HoursInfo = () => {
  return (
    <dl className="list-info p-4 bg-white rounded shadow-md">
      <dt className="title font-semibold text-lg">Hours</dt>
      <dd className="desc">
        <div className="hour_box mb-4">
          <button
            type="button"
            aria-expanded="false"
            aria-label="View all"
            className="button_toggle flex justify-between w-full p-2 bg-blue-600 text-white rounded"
          >
            <span className="current">
              <span className="day">Mon</span>
              <span className="hour">10:00 - 19:00, 00:00 - 00:00</span>
            </span>
          </button>
          <span className="memo text-sm text-gray-500">เวลาเปิดบริการ</span>
          <div className="hour_list mt-2">
            {['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'].map((day, index) => (
              <div key={index} className={`hour_item ${day === 'Mon' ? 'is_active' : ''} flex justify-between p-2 border-b`}>
                <span className="day">{day}</span>
                <span className="hour">10:00 - 19:00, 00:00 - 00:00</span>
              </div>
            ))}
          </div>
        </div>
      </dd>

      <dt className="title font-semibold text-lg">Delivery time</dt>
      <dd className="desc">
        <span className="time">Approx. 1 hour</span>
        <span className="memo text-sm text-gray-500">เวลาจัดส่งอาจเปลี่ยนแปลงได้</span>
      </dd>

      <dt className="title font-semibold text-lg">Delivery fee</dt>
      <dd className="desc">
        <em>เริ่มต้น 30 บาท</em>
      </dd>

      <dt className="title font-semibold text-lg">Conditions</dt>
      <dd className="desc">
        Minimum order total <em>฿300</em>
      </dd>

      <dt className="title font-semibold text-lg">Delivery areas</dt>
      <dd className="desc">Bangkok</dd>
    </dl>
  );
};

export default HoursInfo;
