import { ref } from 'vue';

export default function useLocationMap() {
    const zoom = ref(20);
    const center = ref([-33.4149047, -70.5813343]);

    function pin(e) {
        const marker = e.target.getLatLng();
        center.value = [marker.lat, marker.lng];
    }

    return {
        zoom,
        center,
        pin
    }
}