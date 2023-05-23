//*****************************************************************************/
// Payload decoder for Sensing Labs TOR-LAB-13NS sensor.
// works on ChirpStack V4.
//******************************************************************************/
function decodeUplink(input) {
    var bytes = input.bytes; // Assuming bytes is the input array
  
    // Extract ID
    var id_value = bytes[0];
    
    // Extract battery level
    var battery_value = bytes[1] / 254.0;
    
    // Extract current state
    var current_state = bytes[2] & 0x80 ? "Open" : "Close";
    
    // Extract last pulse state
    var last_pulse_state = bytes[5] & 0x80 ? "Open" : "Close";
      
    return {
      data: {
        id_value: id_value,
        battery_level: battery_value,
        current_state: current_state,
        last_pulse_state: last_pulse_state,
      }
    };
  }
